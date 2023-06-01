yarn build && \
touch docs/.nojekyll && \
echo "cdn.jirayu.pw" > docs/CNAME && \
git add . && \
git commit -m "Update" && \
git push -u origin main
