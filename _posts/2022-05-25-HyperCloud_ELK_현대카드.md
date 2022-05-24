---
layout: post
title: HyperCloud ELK 현대카드
subtitle: HyperCloud ELK 현대카드
categories: Kubernetes
tags: [Kubernetes, ELK]
---


## 기조실 내부테스트에 필요한 하이퍼데이터 구축

- hypercloud 접속 정보(hyperdata)
url : http://192.168.179.191/hypercloud-osp/#!/login
id/passwd : tmax-usr@tmax.co.kr/Qwer12345

- hyperdata 접속 정보
url : http://192.168.179.186:32412/hyperdata8/
id/passwd : admin/admin



## Team HyperCloud
http://192.168.188.106:30080/hypercloud-osp/#!/




## 현대카드 ELK

HyperCloud3 환경의 레지스트리 정보는 192.168.53.49:5000 

[UI 접속 정보]

URL: http://192.168.53.50/hypercloud-osp/

사용자 계정 ID/PW: bi01@tmax.co.kr/qwer1234! (bi02@tmax.co.kr/qwer1234!)

관리자 계정 ID/PW: admin@tmax.co.kr/xlaortm@23

도메인: Hcard (CPU: 24Core, Mem: 48GB, Disk: 1000GB)













==============================================================================================================

issue

ERROR: [1] bootstrap checks failed
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
==============================================================================================================

url : https://tod2.tistory.com/185

$ cat /proc/sys/vm/max_map_count
$ /usr/sbin/sysctl -w vm.max_map_count=262144


Namespace : 
-n hpcd-04718540

======================
Elasticsearch
======================
hpcd-3255da34-hcjc4   1/1     Running   0          22h
hpcd-327baf39-mmxfj   1/1     Running   0          22h
hpcd-32ab653e-n544x   1/1     Running   0          22h



service/hpcd-3233632e   NodePort       10.96.116.144   <none>          9200:31083/TCP                                                                            74s


======================
Kibana
======================
hpcd-32279f47-dqkcz                hpcd-3273f618-wnvzq                             1/1     Running     0          35s

containerid
bffe0fa3272a


======================
Logstash
======================

hpcd-04718540                 hpcd-04dc3f80-4thcn                              0/1     ContainerCreating   0          28s


container id
796b4387fbcb        


Elasticsearch service name

hpcd-044eb0ae


        env:
          - name: ELASTICSEARCH_URL
            value: http://elasticsearch-logging:9200



http://hpcd-044eb0ae:9200


NameSpace

  


[root@master ~]# kubectl get service -n hpcd-04718540
NAME            TYPE           CLUSTER-IP      EXTERNAL-IP     PORT(S)                                                                                   AGE
hpcd-040b7d36   LoadBalancer   10.96.216.159   192.168.53.90   8080:31926/TCP,22:30300/TCP,9736:30522/TCP,8765:31386/TCP,8808:30607/TCP,9876:32638/TCP   5d2h
hpcd-045e68fb   LoadBalancer   10.96.196.129   192.168.53.86   8080:31163/TCP                                                                            5d4h
hpcd-04cd564d   LoadBalancer   10.96.73.172    192.168.53.85   22:32277/TCP,80:30430/TCP                                                                 6d4h
hpcd-04d3c0b5   NodePort       10.96.31.229    <none>          5601:32432/TCP                                                                            5d6h
hpcd-04df772b   LoadBalancer   10.96.53.228    192.168.53.87   22:30178/TCP,9736:30867/TCP,8080:30243/TCP                                                5d3h
hpcd-3233632e   NodePort       10.96.116.144   <none>          9200:31083/TCP                                                                            67m
hpcd-32b6db12   LoadBalancer   10.96.18.69     192.168.53.76   9200:30913/TCP,9300:32095/TCP                                                             2d
hpcd-32b8d126   NodePort       10.96.49.243    <none>          5044:30365/TCP                                                                            3d9h







[root@node1 ~]# docker ps -a

상태 확인 및 컨테이너 ID 확인

[root@node1 ~]# docker commit -a "bips-pypi" 007b1334b1e6 jhhan771/pypi-server

컨테이너 ID 기준으로 이미지 생성

[root@node1 ~]# docker images

생성된 이미지 확인

[root@node1 ~]# docker push jhhan771/pypi-server:latest

접속된 Docker 계정에 이미지 업로드


[root@node1 ~]# docker start 컨테이너ID

컨테이너 ID 기준으로 도커 실행


[root@node1 ~]# docker attach 컨테이너ID

컨데이터 ID 기준 도커 접근



CONTAINER ID        IMAGE                                                  COMMAND                  CREATED             STATUS                     PORTS               NAMES
ac9af9f2cbbe        192.168.53.49:5000/logstash                            "/usr/local/bin/dock…"   24 minutes ago      Up 24 minutes                                  k8s_hpcd-04cd913c-ctn1_hpcd-04cd913c-9g8hp_



docker commit ac9af9f2cbbe 192.168.53.49:5000/logstash:6.8.7

docker commit 796b4387fbcb 192.168.53.49:5000/logstash:6.8.7


docker commit 0fb1b8cb5289 192.168.53.49:5000/logstash:6.8.7

=============================================================================================================================================
logstash image commit
=============================================================================================================================================

[root@worker01 ~]# docker commit d3f0e4e4f376 192.168.53.49:5000/logstash:6.8.7
sha256:774d32c4ad6a78c7132f12493833ced4874d8684b65c7b14114677687d96673f



REPOSITORY                                                     TAG                   IMAGE ID            CREATED             SIZE
192.168.53.49:5000/logstash                                    6.8.7                 774d32c4ad6a        18 seconds ago      835MB

[root@worker01 ~]# docker push 192.168.53.49:5000/logstash:6.8.7
=============================================================================================================================================




=============================================================================================================================================
kibana image commit
=============================================================================================================================================
docker commit 6c801eb21ce6 192.168.53.49:5000/kibana:6.8.7
docker push 192.168.53.49:5000/kibana:6.8.7
=============================================================================================================================================


docker commit 2819477019ee 192.168.53.49:5000/elasticsearch:6.8.7
docker push 192.168.53.49:5000/elasticsearch:6.8.7








elasticsearch.yaml
```
cluster.name: "docker-cluster"
network.host: 0.0.0.0
```

kibana.yaml
```
# Default Kibana configuration for docker target
server.name: kibana
server.host: "0"
elasticsearch.hosts: [ "http://elasticsearch:9200" ]
xpack.monitoring.ui.container.elasticsearch.enabled: true

```


logstash.yaml
```
http.host: "0.0.0.0"
xpack.monitoring.elasticsearch.hosts: [ "http://elasticsearch:9200" ]
```




curl -XPUT 'http://192.168.53.43:31009/_all/_settings?preserve_existing=true' -d '{
  "index.number_of_replicas" : "3"
}'



curl -XPUT http://localhost:9200/_all/_settings?preserve_existing=true -H -d '{"index.number_of_replicas" : "3"}'


curl -XPUT http://192.168.53.43:31009/classes/class/1/ -H 'Content-Type: application/json' -d '{"title":"Algorithm", "professor":"John"}'



curl -XPUT "http://localhost:9200/_all/_settings?preserve_existing=true" -H 'Content-Type: application/json' -d' { "index.number_of_replicas": 3 }'


curl -XPUT "http://localhost:9200" -H 'Content-Type: application/json' -d' { "index.number_of_replicas": 3 }'


====================================================================================================
 이게 진짜 되는거
====================================================================================================
curl -XPUT "http://localhost:9200/_template/all" -H 'Content-Type: application/json' -d'
{
  "template": "*",
  "settings": {
    "index.number_of_replicas": 2
    "index.number_of_shards": 3
  }
}'
====================================================================================================


curl -XPUT "http://localhost:9200/_template/all" -H 'Content-Type: application/json' -d' { "template": "*", "settings": { "index.number_of_replicas": 2, "index.number_of_shards": 3 } }'





curl -XGET 192.168.53.43:31009/_cat/indices


curl -XPUT http://192.168.53.43:31009/classes

curl -XPUT http://192.168.53.43:31009/classes/class/1/ -H 'Content-Type: application/json' -d '{"title":"Algorithm", "professor":"John"}'


./filebeat -c filebeat.yml &

> nohup.out &






# node status
curl -XGET 192.168.53.51:9200/_nodes/process?pretty

curl -XGET 192.168.53.51:9200/_nodes/stats?pretty





curl -XGET 192.168.53.51:9200/_cluster/state?pretty > elasticsearch.txt





hpcd-683c9729-fwqht   1/1     Running       0          25s
hpcd-685e2723-8hjmr   1/1     Running       0          99s
hpcd-68f0f126-f2dcz   1/1     Running       0          45s


curl -XPUT "http://localhost:9200/_template/all" -H 'Content-Type: application/json' -d'
{
  "template": "*",
  "settings": {
    "index.number_of_replicas" : "2",
    "index.number_of_shards": 3
  }
}'





curl -XGET localhost:9200/_cat/indices






hpcd-683c9729-lsj89
hpcd-685e2723-t7n4h
hpcd-68f0f126-f2dcz




kubectl exec -it hpcd-683c9729-lsj89 -n  hpcd-04718540 bash
kubectl exec -it hpcd-685e2723-t7n4h -n  hpcd-04718540 bash
kubectl exec -it hpcd-68f0f126-f2dcz -n  hpcd-04718540 bash



hpcd-6863a47d-qffmt





[root@master ~]# curl -XGET 192.168.53.51:9200/_cat/nodes?v
ip             heap.percent ram.percent cpu load_1m load_5m load_15m node.role master name
10.244.219.118           56          95   3    0.87    0.77     0.75 mdi       *      h0-QvmB
10.244.241.85            38          99   4    0.70    0.64     0.67 mdi       -      PwbHqS8
10.244.59.227            38          70   3    0.22    0.24     0.35 mdi       -      bNWwq28





curl -XGET 192.168.53.51:9200/_cat/indices