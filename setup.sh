#!/bin/bash

echo "Setting up Elasticsearch"

# apply elasticsearch manifests
kubectl apply -f elasticsearch-pvc.yaml
kubectl apply -f elasticsearch.yaml
kubectl apply -f elasticsearch-service.yaml

# wait for Elasticsearch pods to be in the "Running" state
kubectl wait --for=condition=Ready pod -l app=elasticsearch --timeout=300s

echo "Setting up Ingestor"

# apply ingestor manifests
kubectl apply -f aiohttp-log-ingestor-deployment.yaml
kubectl apply -f aiohttp-log-ingestor-service.yaml
kubectl apply -f ingestor-hpa.yaml

# wait for Ingestor pods to be in the "Running" state
kubectl wait --for=condition=Ready pod -l app=aiohttp-log-ingestor --timeout=300s

echo "Ingestors up and running"

#Port forwarding for elasticsearch-service to localhost:9200
kubectl port-forward service/elasticsearch-service 9200:9200 &

# Port forwarding for aiohttp-log-ingestor to localhost:3000 
kubectl port-forward service/aiohttp-log-ingestor 3000:3000 &

echo " Ingestors open at Port number 3000 and, endpoint "/ingest-log"
