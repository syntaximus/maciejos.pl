#1. budowa obrazu dockerowego
docker buildx build -t maciejos:prod -t nas:6000/maciejos:prod --platform linux/arm64v8 -f C:\Users\synta\source\repos\maciejos\Dockerfile C:\Users\synta\source\repos\maciejos\

#2. publikacja obrazu do repozytorium
docker push nas:6000/maciejos:prod

#3. wgranie aktualnych serwisów i deploymentów kubernetesowych
kubectl apply -f C:\Users\synta\source\repos\maciejos\kubernetes\maciejos-deployment.yaml
kubectl apply -f C:\Users\synta\source\repos\maciejos\kubernetes\maciejos-service.yaml

#4. restart deploymentu
kubectl rollout restart deployment maciejos -n=pan-rachunek

#5. podegranie ingress
kubectl apply -f C:\Users\synta\source\repos\maciejos\kubernetes\maciejos-ingress.yaml
