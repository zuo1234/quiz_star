from ruby:2.6.5

RUN apt-get update && apt-get install -y nodejs yarn sqlite3

WORKDIR /app
COPY Gemfile Gemfile.lock ./

RUN gem source -a https://gems.ruby-china.com/ && gem install bundler && bundle install


COPY . .

EXPOSE 3004
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3004"]
