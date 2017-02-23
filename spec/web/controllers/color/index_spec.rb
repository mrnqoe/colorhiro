require 'spec_helper'
require_relative '../../../../apps/web/controllers/color/index'

describe Web::Controllers::Color::Index do
  let(:action) { Web::Controllers::Color::Index.new }
  let(:params) { Hash[] }

  it 'is successful' do
    response = action.call(params)
    response[0].must_equal 200
  end
end
