from dotenv import load_dotenv 
from flask import Flask, request, jsonify
from flask_cors import CORS 
from langchain.agents import load_tools, initialize_agent
from langchain.llms import OpenAI
from langchain.chains.conversation.memory import ConversationBufferMemory

load_dotenv()
app = Flask(__name__)
#initializes application
CORS(app)
# Load tools
#loads the wolfram API tools
tools = load_tools(['wolfram-alpha'])

# Initialize OpenAI language model
llm = OpenAI(model_name="text-davinci-003", temperature=0)

# Initialize conversation memory
memory = ConversationBufferMemory(memory_key="chat_history")

# Initialize agent
agent = initialize_agent(tools, llm, agent="conversational-react-description", memory=memory, verbose=True)
#route server with the /ask endpoint
@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    prompt = data.get('question', '')

    if not prompt:
        return jsonify({"error": "No question provided."})

    query = agent.run(prompt)
    return jsonify({"answer": query})

if __name__ == '__main__':
    app.run(debug=True)
