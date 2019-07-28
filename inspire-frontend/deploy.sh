SHA1=`git rev-parse HEAD`
IMAGE='gcr.io/inspire-to-be-better-245908/inspire-frontend:$SHA1'
echo 'Deploying $IMAGE . . .'

docker build -t $IMAGE .
docker push $IMAGE
kubectl create deployment inspire-frontend --image=$IMAGE
kubectl expose deployment inspire-frontend --type=LoadBalancer --port 80 --target-port 8080

