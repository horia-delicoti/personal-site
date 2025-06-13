---
title: Kubernetes
---

[Kubernetes](https://kubernetes.io/) is an open-source platform for automating deployment, scaling, and management of containerized applications. It orchestrates clusters of machines to run containers reliably and efficiently, making it a cornerstone of modern cloud-native infrastructure.

---

## 🌟 Key Concepts

- **Pod:** The smallest deployable unit, usually running one or more containers.
- **Node:** A worker machine in the cluster (VM or physical).
- **Cluster:** A set of nodes managed by Kubernetes.
- **Deployment:** Manages stateless applications and ensures the desired number of pods are running.
- **Service:** Exposes a set of pods as a network service.
- **ConfigMap & Secret:** Manage configuration and sensitive data.
- **Namespace:** Virtual clusters within a physical cluster for resource isolation.
- **ReplicaSet:** Ensures a specified number of pod replicas are running.
- **Ingress:** Manages external access to services, typically HTTP.

---

## 📚 Useful Links

- [Helm](https://helm.sh/) - Kubernetes package manager
- [Learning Containers, Kubernetes, and Backend Development with Ivan Velichko](https://iximiuz.com/en/)
- [Beetle - Kubernetes multi-cluster deployment automation](https://github.com/Clivern/Beetle)
- [Infra - Access management for clusters](https://github.com/infrahq/infra)
- [kubectl Quick Reference](https://kubernetes.io/docs/reference/kubectl/quick-reference/)
- [Kubernetes cheat sheet](https://spacelift.io/blog/kubernetes-cheat-sheet)

---

## 🛠️ Kubernetes Command Reference

### Context and configuration

```sh
alias k=kubectl
```

```sh
/root/.kube/config  # kube config file
```

```sh
kubectl get all              # list all available resources
kubectl api-resources --help # print the supported API resources
kubectl options              # list of global command-line options
```

### Pods

```sh
# List pods
kubectl explain pods              # get the documentation for pod manifests
kubectl get pod <my-pod> -o yaml > pod-definition.yaml  # get a pod's YAML
kubectl get pods -o wide --show-labels # list all pods in the namespace
kubectl get pods --all-namespaces # list all pods in all namespaces

# Create and run pods
kubectl create -f nginx.yaml 
kubectl apply -f ./my-manifest.yaml       # create resource(s)
kubectl apply -f ./my1.yaml -f ./my2.yaml # create from multiple files
kubectl run nginx --image=nginx   # create an NGINX Pod
kubectl run nginx --image=nginx --dry-run=client -o yaml # generate POD Manifest YAML file (-o yaml). Don’t create it(–dry-run)
kubectl run -i --tty busybox --image=busybox:1.28 -- sh  # Run pod as interactive shell
kubectl run nginx --image=nginx -n mynamespace      # Start a single instance of nginx pod in the namespace of mynamespace
kubectl run nginx --image=nginx --dry-run=client -o yaml > pod.yaml # Generate spec for running pod nginx and write it into a file called pod.yaml

# Interact with Pods
kubectl edit pod <my-pod>       # edit pod yaml file
kubectl expose pod nginx --type=NodePort --port=80 --name=nginx-service --dry-run=client -o yaml # create a service named nginx to type NodePort to expose pod nginx's port 80 on port 30080 on the nodes
kubectl expose pod redis --port=6379 --name redis-service # create service to expose the redis application within the cluster on port 6379
kubectl attach my-pod -i                            # attach to Running Container
kubectl port-forward my-pod 5000:6000               # listen on port 5000 on the local machine and forward to port 6000 on my-pod
kubectl exec my-pod -- ls /                         # run command in existing pod (1 container case)
kubectl exec --stdin --tty my-pod -- /bin/sh        # interactive shell access to a running pod (1 container case)
kubectl exec my-pod -c my-container -- ls /         # run command in existing pod (multi-container case)
kubectl replace -f manifest.yaml --force            # deletes the resources and creates a new one

# Label Pods
kubectl label pods my-pod new-label=awesome                      # add a Label
kubectl label pods my-pod new-label-                             # remove a label
kubectl label pods my-pod new-label=new-value --overwrite        # overwrite an existing value

# Delete services
kubectl delete pod <my-pod>                                       # delete pod
kubectl delete -f ./pod.json                                      # delete a pod using the type and name specified in pod.json
kubectl delete pod unwanted --now                                 # delete a pod with no grace period
kubectl delete pod,service baz foo                                # delete pods and services with same names "baz" and "foo"
kubectl delete pods,services -l name=myLabel                      # delete pods and services with label name=myLabel
kubectl -n my-ns delete pod,svc --all                             # delete all pods and services in namespace my-ns,
kubectl get pods  -n mynamespace --no-headers=true | awk '/pattern1|pattern2/{print $1}' | xargs  kubectl delete -n mynamespace pod # delete all pods matching the awk pattern1 or pattern2

# Pod Logs and debugging
kubectl logs my-pod                                 # dump pod logs (stdout)
kubectl logs -l name=myLabel                        # dump pod logs, with label name=myLabel (stdout)
kubectl logs my-pod --previous                      # dump pod logs (stdout) for a previous instantiation of a container
kubectl logs my-pod -c my-container                 # dump pod container logs (stdout, multi-container case)
kubectl logs -l name=myLabel -c my-container        # dump pod container logs, with label name=myLabel (stdout)
kubectl logs my-pod -c my-container --previous      # dump pod container logs (stdout, multi-container case) for a previous instantiation of a container
kubectl logs -f my-pod                              # stream pod logs (stdout)
kubectl logs -f my-pod -c my-container              # stream pod container logs (stdout, multi-container case)
kubectl logs -f -l name=myLabel --all-containers    # stream all pods logs with label name=myLabel (stdout)
kubectl debug my-pod -it --image=busybox:1.28       # Create an interactive debugging session witin existing pod and immediately attach to it
kubectl debug node/my-node -it --image=busybox:1.28 # Create an interactive debugging session on a node and immediately attach to it

# Show metrics of Pods
kubectl top pod                                     # Show metrics for all pods in the default namespace
kubectl top pod POD_NAME --containers               # Show metrics for a given pod and its containers
kubectl top pod POD_NAME --sort-by=cpu              # Show metrics for a given pod and sort it by 'cpu' or 'memory'
```

### ReplicaSet

```sh
kubectl get replicaset            # list ReplicaSet
kubecctl describe replicaset <my-replicaset> # describe ReplicaSet

kubectl create -f replicaset.yaml   # create new ReplicaSet
kubectl delete replicaset <my-replicaset>  # delete ReplicaSet
kubectl edit replicaset <my-replicaset>    # edit ReplicaSet
kubectl scale replicaset <my-replicaset> --replicas=5 # scale ReplicaSet to 5 Pods
```

### Deployment

```sh
# list deployment
kubectl describe deployment
kubectl get deployment <my-dep>     # list a particular deployment

# create deployments
kubectl create deployment nginx --image=nginx # start a single instance of nginx
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml # generate deployment YAML file (-o yaml). Don’t create it(–dry-run)
kubectl create deployment nginx --image=nginx --replicas=4 # generate deployment with 4 replicas

# modify or scale deployment
kubectl expose deployment nginx --port 80 # expose deployment port 80
kubectl scale deployment nginx --replicas=4 # scale a deployment
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml > nginx-deployment.yaml # scale/modify by modifying the YAML file
kubectl edit deployment nginx # Update deployment file
kubectl set image deployment nginx nginx=nginx:1.18
```

### Namespace

```sh
kubectl get namespaces   # list all namespaces
kubectl describe namespace
kubectl create ns <name> # create new namespace
kubectl config set-context $(kubectl config current-context) --namespace=dev # switch permantly to new namespace
```

### Cluster

```sh
kubectl config -h               # context config help
kubectl config get-contexts     # context allow you to switch between different clusters
kubectl config current-context  # check wich cluster (context) you are currently working with
kubectl config use-context <context-name> # switch between contexts

kubectl cluster-info # check cluster info
kubectl cluster-info dump # to further debug and diagnose cluster problems
```

### Env Var, ConfigMaps and Secrets

```sh
# ConfigMaps
kubectl get configmaps            # list all ConfigMaps
kubectl describe configmap       # describe ConfigMaps
kubectl create configmap <config-name> -from-literal=<key>=<value>  # create new ConfigMap

# secrets
kubectl get secrets                        # list all secrets
kubectl describe secret app-secret -o yaml # to get the secrets
kubectl create secret generic <secret-name> --from-literal=<key>=<value>
echo -n 'mysql' | base64                   # encode secrets
echo -n 'bxlzd=2' | base64 --decode        # decode secret
```

### Service Cluster IP

```sh
kubectl create service clusterip redis --tcp=6379:6379 --dry-run=client -o yaml # create a service named redis-service of type ClusterIP
```

### Nodes

```sh
kubectl describe nodes my-node # Describe commands with verbose output

kubectl label nodes node-name label-key=label-value              # Add a label to node
kubectl label nodes node-name label-key-                         # Remove a label from node
```

### [Rolling Updates and Rollback](https://spot.io/resources/kubernetes-autoscaling/5-kubernetes-deployment-strategies-roll-out-like-the-pros/)

```sh
kubectl set image deployment/frontend www=image:v2               # Rolling update "www" containers of "frontend" deployment, updating the image
kubectl rollout history deployment/frontend                      # Check the history of deployments including the revision
kubectl rollout undo deployment/frontend                         # Rollback to the previous deployment
kubectl rollout undo deployment/frontend --to-revision=2         # Rollback to a specific revision
kubectl rollout status -w deployment/frontend                    # Watch rolling update status of "frontend" deployment until completion
kubectl rollout restart deployment/frontend                      # Rolling restart of the "frontend" deployment


# Annotation
kubectl annotate pods my-pod icon-url=http://goo.gl/XXBTWq       # Add an annotation
kubectl annotate pods my-pod icon-url-                           # Remove annotation

# Autoscale
kubectl autoscale deployment foo --min=2 --max=10                # Auto scale a deployment "foo"
```

### Update objects

```sh

kubectl replace -f nginx.yaml

kubectl delete -f nginx.yaml

kubectl apply -f nginx.yaml
```

### Interacting with Nodes and cluster

```sh
kubectl cordon my-node                                                # Mark my-node as unschedulable
kubectl drain my-node                                                 # Drain my-node in preparation for maintenance
kubectl uncordon my-node                                              # Mark my-node as schedulable
kubectl top node/pod                                                  # Show metrics for all nodes/pods
kubectl top node my-node                                              # Show metrics for a given node
kubectl cluster-info                                                  # Display addresses of the master and services
kubectl cluster-info dump                                             # Dump current cluster state to stdout
kubectl cluster-info dump --output-directory=/path/to/cluster-state   # Dump current cluster state to /path/to/cluster-state

# Taints to nodes
kubectl taint nodes <node-name> key=value:<taint-effect> # taint-effect: NoSchedule | PreferNoSchedule | NoExecute
kubectl taint nodes <node-name> node-role.kubernetes.io/<node-name>:NoSchedule- # "-" command to untaint the node

# Tolerations - PODs

kubectl -n <namespace> exec -it <pod_name> -- cat /log/app.log        # Execute command inside container
```

### Upgrade plan

```sh
kubeadm upgrade plan
kubeadm upgrade apply
```

### Backup and Restore Methods

```sh

```

### Inspect Service Logs

```sh
journalctl -u etcd.service -l
kubectl logs etcd-master
```

#### Service Acccount

```sh
kubectl create serviceaccount <name>   # create service account
kubectl get serviceaccount             # list all service accounts
kubectl describe serviceaccount <name> # get details about service account
```

### Security

#### Certificates

```sh
kubectl get csr # get a list of all CSR
kubectl get csr <name> -o yaml  # get data about a CSR request
kubectl certificate approve <name> # approve a CSR request
kubectl certificate deny <name> # reject CSR request
kubectl delete csr <name> # delete CSR request object
```

#### API Groups

```sh
curl http://localhost:6443 -k # list any available API groups
kubectl api-resources --namespaced=true #get full list of api resources
```

#### Role Based Access Controls

```sh
kubectl get roles
kubectl describe role <role> 
kubectl get rolebindings
kubectl describe rolebinding <role_binding_name>

kubectl create role developer --namespace=default --verb=list,create,delete --resource=pods # create a role
kubectl create rolebinding dev-user-binding --namespace=default --role=developer --user=dev-user # create a rolebinding

kubectl auth can-i create deployments --as <user> # check if you have access as user
```

#### Cluster Roles Access Controls

```sh
kubectl get clusterroles
kubectl get clusterrolebindings
kubectl describe clusterrolebindings <cluster_role_binding_name>
```
