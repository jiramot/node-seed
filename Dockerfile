FROM jiramot/node-pm2:6.0.0

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /apps && cp -a /tmp/node_modules /apps

WORKDIR /apps
ADD . /apps

EXPOSE 3000
ADD start.sh /start.sh
RUN chmod 766 /start.sh
CMD ["/start.sh"]
