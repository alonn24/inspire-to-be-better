# titlr
docker build -t gcr.io/inspire-to-be-better-245908/inspire-frontend:v1 .
docker run -it -p 3000:3000 gcr.io/inspire-to-be-better-245908/inspire-frontend:v1
docker push gcr.io/inspire-to-be-better-245908/inspire-frontend:v1
kubectl create deployment inspire-frontend --image=gcr.io/inspire-to-be-better-245908/inspire-frontend:v1
kubectl expose deployment inspire-frontend --type=LoadBalancer --port 80 --target-port 8080


