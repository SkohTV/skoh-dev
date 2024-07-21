skoh.dev -> ??? (???)<br>
skoh.dev/ln/ -> redirect with nginx<br>
api.skoh.dev -> rust (???)<br>
blog.skoh.dev -> static site generator (Hugo)<br>
php.skoh.dev -> php (apache)<br>

```bash
# PC
docker compose build
docker save -o skoh-dev.tar skoh-dev-apex:latest skoh-dev-api:latest skoh-dev-nginx:latest
scp docker-compose.yml skoh-dev.tar root@IP:~/skoh-dev/

# Server
ssh root@IP
docker system prune -a
docker load -i skoh-dev.tar
docker compose up -d
```
