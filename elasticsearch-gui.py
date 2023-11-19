import tkinter as tk
from tkinter import scrolledtext
from tkinter import messagebox
import requests
import json
import shlex

class ElasticsearchQueryApp:
    def __init__(self, master):
        self.master = master
        master.title("Elasticsearch Query App")

        self.create_widgets()

    def create_widgets(self):
        self.query_label = tk.Label(self.master, text="Enter Query:")
        self.query_label.pack()

        self.query_entry = tk.Entry(self.master, width=50)
        self.query_entry.pack()

        self.result_text = scrolledtext.ScrolledText(self.master, width=80, height=20)
        self.result_text.pack()

        self.run_query_button = tk.Button(self.master, text="Run Query", command=self.run_query)
        self.run_query_button.pack()

        self.help_button = tk.Button(self.master, text="Help", command=self.show_help)
        self.help_button.pack()

        self.exit_button = tk.Button(self.master, text="Exit", command=self.master.destroy)
        self.exit_button.pack()

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
            "  Enter queries in the form of key-value pairs, separated by '='.\n"
            "  Example: field_name=value\n"
            "  Quoted values are supported: field_name=\"quoted value with spaces\"\n"
        )

        help_window = tk.Toplevel(self.master)
        help_window.title("Help")

        # Use a monospaced font for consistent indentation
        text_widget = tk.Text(help_window, wrap="word", font=("Courier New", 12))
        text_widget.insert(tk.END, help_message)
        text_widget.pack(expand=True, fill="both")
        text_widget.config(state=tk.DISABLED)  # Make the text widget read-only

        # Add a close button to the help window
        close_button = tk.Button(help_window, text="Close", command=help_window.destroy)
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
