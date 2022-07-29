# Kubernetes React Deployment

## Steps

- setup minikube first

```bash
$ eval $(minikube docker-env)
```

- build the docker image

```bash
$ docker build -t k8s-react:latest .
```

- deploy the kubernets deployment

```bash
$ kubectl apply -f k8s/deployment.yaml
```

- deploy the load balancer 

```bash 
$ kubectl apply -f k8s/load-balancer.yaml
```

- get the `minikube` ip

```bash
$ minikube ip
```

- access the webpage! 

```bash
$ curl <minikube-ip>:<node_port>
```

### Random Notes 🦠

- restart deployment

  - `kubectl rollout restart deployment k8s-react`

- re-pull image

  - https://github.com/kubernetes/kubernetes/issues/33664#issuecomment-497242094
