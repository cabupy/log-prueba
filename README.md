### Logger & Docker Test

Probamos Logger y Docker

### Docker

- hay que bajar el instalador

docker run

### Docker-Compose (no sirve para nada ... )

### Kubernetes o k8s

- Que es un POD?
- Que es un ReplicationController?
- Que es un Service?
- Que son los Secrets y donde se almacenan?
- Que son los PV y los PVC, como funcionan.


- hay que instalar kubectl

```
brew install kubetcl
# Algunos comandos de kubectl
kubectl config view
kubectl config use-content minikube
kubectl -n testing get svc
kubectl -n testing get pods
kubectl -n testing get nodes -o wide
kubectl -n testing get ns
kubectl -n testing get all
kubectl -n testing delete ...
kubectl describe service nodejs-deployment
# cambia de contexto
kubectl config use-context minikube
```

### Kubernetes DO

- hay que instalar doctl

```
brew install doctl
# Con el token del archivo config que descargamos
doctl auth init
doctl kubernetes cluster kubeconfig save k8s-1-18-8-do-0-nyc3-1600105000515
# Para saber el ID del certificado ssl
doctl compute certificate list
```

### Autor:

- `Cabu Vallejos`

### Licencia MIT: [Licencia](https://github.com/cabupy/log-prueba/blob/master/LICENSE)