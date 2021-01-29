class Admins::QuizController < Admins::ApplicationController
  def index
    @quizzes = Quiz.all
  end

  def new
    
  end
end
