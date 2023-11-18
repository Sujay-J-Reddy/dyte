#!/bin/bash

# start minikube with desired config
minikube start --memory=4096 --cpus=2 --kubernetes-version=v1.22.2

#apply manifests
kubectl apply -f elasticsearch.yaml
kubectl apply -f elasticsearch-service.yaml

#url generation
MINIKUBE_IP=$(minikube ip)
NODE_PORT=$(kubectl get svc elasticsearch-service -o=jsonpath='{.spec.ports[0].nodePort}')
ELASTICSEARCH_URL="http://$MINIKUBE_IP:$NODE_PORT"
echo "Elasticsearch URL: $ELASTICSEARCH_URL"
