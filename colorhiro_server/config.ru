require "rubygems"
require "bundler"
require "dotenv"
Bundler.require
Dotenv.load

require './environments.rb'
require "./app"
run ColorhiroAPI
