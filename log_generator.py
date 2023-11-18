import requests
import json
import time
from datetime import datetime

log_ingestor_url = "http://localhost:3000/ingest-log"

def generate_log():
    log = {
        "level": "info",
        "message": "Log entry",
        "resourceId": "server-123",
        "timestamp": datetime.utcnow().isoformat(),
        "traceId": "abc-xyz-123",
        "spanId": "span-456",
        "commit": "5e5342f",
        "metadata": {
            "parentResourceId": "server-098"
        }
    }
    return json.dumps(log)

log_count = 10

for _ in range(log_count):
    log_entry = generate_log()
    headers = {'Content-Type': 'application/json'}
    
    try:
        response = requests.post(log_ingestor_url, data=log_entry, headers=headers)
        response.raise_for_status()
        print(f"Log sent successfully: {response.text}")
    except requests.exceptions.RequestException as e:
        print(f"Failed to send log: {e}")
    
    time.sleep(1)  
