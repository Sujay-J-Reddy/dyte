#!/bin/bash

# start minikube with desired config
minikube start --memory=4096 --cpus=2 

echo "Setting up Elasticsearch"

#apply elasticsearch manifests
kubectl apply -f elasticsearch-pvc.yaml
kubectl apply -f elasticsearch.yaml
kubectl apply -f elasticsearch-service.yaml

#url generation
MINIKUBE_IP=$(minikube ip)
NODE_PORT=$(kubectl get svc elasticsearch-service -o=jsonpath='{.spec.ports[0].nodePort}')
ELASTICSEARCH_URL="http://$MINIKUBE_IP:$NODE_PORT"
echo "Elasticsearch URL: $ELASTICSEARCH_URL"

echo "Setting up Ingestor"

#apply ingestor manifests
kubectl apply -f aiohttp-log-ingestor-deployment.yaml
kubectl apply -f aiohttp-log-ingestor-service.yaml
kubectl apply -f ingestor-hpa.yaml

# Port forwarding for aiohttp-log-ingestor to localhost:3000 
kubectl port-forward service/aiohttp-log-ingestor-service 3000:3000 &