import tkinter as tk
from tkinter import scrolledtext
from tkinter import messagebox
import requests
import json
import shlex

class ElasticsearchQueryApp:
    button_style = {'bg': '#007ACC', 'fg': 'white', 'activebackground': '#005A8C', 'activeforeground': 'white'}

    def __init__(self, master):
        self.master = master
        master.title("Query App")
        master.geometry("800x600")  # Set initial window size
        master.configure(bg='#2E2E2E')  # Set background color to dark gray

        self.create_widgets()

    def create_widgets(self):
        # Use a light color for text in dark mode
        text_color = 'white'

        self.query_label = tk.Label(self.master, text="Enter Query:", bg='#2E2E2E', fg=text_color)
        self.query_label.grid(row=0, column=0, columnspan=3, pady=(10, 0), sticky='ew')  # Adjust top padding

        self.query_entry = tk.Entry(self.master, width=50, bg='#404040', fg=text_color)  # Darker background for entry
        self.query_entry.grid(row=1, column=0, columnspan=3, pady=(0, 10), sticky='ew')  # Adjust bottom padding

        self.result_text = scrolledtext.ScrolledText(self.master, width=80, height=20, bg='#404040', fg=text_color)
        self.result_text.grid(row=2, column=0, columnspan=3, pady=(0, 10), sticky='nsew')  # Adjust bottom padding

        self.run_query_button = tk.Button(self.master, text="Run Query", command=self.run_query, **self.button_style)
        self.run_query_button.grid(row=3, column=0, padx=(10, 5), sticky='ew')  # Adjust left and right padding

        self.help_button = tk.Button(self.master, text="Help", command=self.show_help, **self.button_style)
        self.help_button.grid(row=3, column=1, padx=5, sticky='ew')  # Adjust right padding

        self.exit_button = tk.Button(self.master, text="Exit", command=self.master.destroy, **self.button_style)
        self.exit_button.grid(row=3, column=2, padx=(5, 10), sticky='ew')  # Adjust left padding

        # Set column weights for resizing
        for i in range(3):
            self.master.grid_columnconfigure(i, weight=1)

        # Set row weights for resizing
        for i in range(4):
            self.master.grid_rowconfigure(i, weight=1)

    def run_query(self):
        user_query = self.query_entry.get()
        if user_query.lower() == 'exit':
            self.master.destroy()
        elif user_query.lower() == 'help':
            self.show_help()
        else:
            elasticsearch_url = "http://localhost:9200"
            index = "logs"
            endpoint = f"{elasticsearch_url}/{index}/_search"
            payload = build_query(user_query)

            try:
                response = requests.post(endpoint, json=payload, headers={"Content-Type": "application/json"})
                response.raise_for_status()
                hits = response.json().get('hits', {}).get('hits', [])
                result_text = ""
                for i, hit in enumerate(hits):
                    source_data = hit.get('_source', {})
                    if source_data:
                        result_text += json.dumps(source_data, indent=2)
                        if i < len(hits) - 1:
                            result_text += ","
                self.result_text.delete(1.0, tk.END)
                self.result_text.insert(tk.END, result_text)
            except requests.exceptions.RequestException as e:
                self.result_text.delete(1.0, tk.END)
                self.result_text.insert(tk.END, f"Error submitting query: {e}")

    def show_help(self):
        help_message = (
            "Usage:\n"
            "  \nEnter queries in the form of key-value pairs, separated by '='.\n"
            "  \nExample: field_name1=value field_name2=value\n"
            "  \nQuoted values are supported: field_name=\"quoted value with spaces\"\n"
        )

        help_window = tk.Toplevel(self.master)
        help_window.title("Help")
        help_window.configure(bg='#2E2E2E')  # Set background color to dark gray

        # Use a monospaced font for consistent indentation
        text_widget = tk.Text(help_window, wrap="word", font=("Courier New", 12), bg='#2E2E2E', fg='white')
        text_widget.insert(tk.END, help_message)
        text_widget.pack(expand=True, fill="both")
        text_widget.config(state=tk.DISABLED)  # Make the text widget read-only

        # Add a close button to the help window
        close_button = tk.Button(help_window, text="Close", command=help_window.destroy, **self.button_style)
        close_button.pack(pady=10)

        


def build_query(query):
    conditions = [condition.split("=") for condition in shlex.split(query)]
    must_terms = [{"match": {key: value}} for key, value in conditions]
    query_body = {"query": {"bool": {"must": must_terms}}}
    return query_body


if __name__ == "__main__":
    root = tk.Tk()
    app = ElasticsearchQueryApp(root)
    root.mainloop()
