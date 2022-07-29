# Kubernetes

## Common Commands

```bash

# get all pods
$ kubectl get pods -A
$ kubectl get all

# get extra info from the pod
$ kubectl get pod -o wide

# get secrets
$ kubectl get secret

# create secret
$ kubectl apply -f postgres.secret.yaml

# create deployment
$ kubectl apply -f postgrs.yaml

# create service
$ kubectl apply -f postgrs.service.yaml

# get service
$ kubectl get service

# describe a service
$ kubectl describe service $SERVICE_NAME
```

## Deploying PostgreSQL and Nodejs Application on Kubernetes.

**GET THE URL**

```bash
minikube service k8s-backend-service --url
```
