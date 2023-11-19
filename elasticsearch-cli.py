import requests
import json
import shlex

def run_query():
    print_help()
    while True:
        print("\n")
        user_query = input("$ query ")

        if user_query.lower() == 'exit':
            break
        elif user_query.lower() == 'help':
            print_help()
        else:
            elasticsearch_url = "http://localhost:9200"
            index = "logs"
            endpoint = f"{elasticsearch_url}/{index}/_search"
            payload = build_query(user_query)

            try:
                response = requests.post(endpoint, json=payload, headers={"Content-Type": "application/json"})
                response.raise_for_status()
                hits = response.json().get('hits', {}).get('hits', [])
                for i, hit in enumerate(hits):
                    source_data = hit.get('_source', {})
                    if source_data:
                        print(json.dumps(source_data, indent=2), end="")
                        if i < len(hits) - 1:
                            print(",")
            except requests.exceptions.RequestException as e:
                print(f"Error submitting query: {e}")

def build_query(query):
    conditions = [condition.split("=") for condition in shlex.split(query)]
    must_terms = [{"match": {key: value}} for key, value in conditions]
    query_body = {"query": {"bool": {"must": must_terms}}}
    return query_body

def print_help():
    print("Usage:")
    print("  Enter queries in the form of key-value pairs, separated by '='.")
    print("  Example: field_name=value")
    print("  Quoted values are supported: field_name=\"quoted value with spaces\"")
    print("Commands:")
    print("  help  - Display this help message")
    print("  exit  - Exit the script")

if __name__ == "__main__":
    run_query()
