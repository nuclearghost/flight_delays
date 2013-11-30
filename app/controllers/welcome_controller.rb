class WelcomeController < ApplicationController

  def index
  end

  def delay
    db = CassandraCQL::Database.new('127.0.0.1:9160', {:keyspace => 'flight'})

    key = "#{params[:from]}#{params[:to]}"
    puts key

    db.execute("SELECT * FROM route_delays WHERE KEY=?", key).fetch { 
      |row| @delay = row.to_hash 
    }

    respond_to do |format|
      #format.html
      format.json { render json: @delay }
    end
  end
end

