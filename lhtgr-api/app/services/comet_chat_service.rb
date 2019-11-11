class CometChatService
    include HTTParty
    BASE_URI = 'https://api.cometchat.com/v1'.freeze

    def initialize(params = nil)
        @params = params
    end

    def create_player
        body = {
            uid: params:['name'],
            name: params['name']
        }

        response = HTTParty.post("#{BASE_URI}/players", headers: headers, body: body)
        response.dig('data')

    end

    def fetch_players
        response = HTTParty.get("#{BASE_URI}/players", headers: headers)
        response.dig('data')
            &.map { |u| { name: u['name'], id: u['uid'] } }
    end

    private

    attr_accessor :params

    def headers
        {
            apikey: ENV['COMETCHAT_API_KEY'],
            appid: ENV['COMETCHAT_APP_ID']

        }
    end

end