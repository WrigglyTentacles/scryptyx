from express import express
import subprocess

app = express()

@app.get("/")
def helloWorld(req, res):
    res.send("Hello World!")

@app.post("/run_test.sh")
def aPostRequest(req, res):
    msg = subprocess.check_output(["ls","-l", "/"])
    res.send(msg)
    print("Run_Test executed")

@app.put("/user")
def updateUser(req, res):
    res.send("Got a PUT request at /user")

def deleteUser(req, res):
    res.send("Got a DELETE request at /user")
app.delete("/user", deleteUser)

app.listen(3000)
