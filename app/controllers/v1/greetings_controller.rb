class V1::GreetingsController < ApplicationController
    def getRandomGreeting
        render json: { greeting: Greeting.find(1 + rand(5)) }.to_json
    end
end