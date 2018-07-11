var fs = require('fs') 
var dirName = process.argv[2]  //定义dirName是传入的第二个参数
if (fs.existsSync("./" + dirName)) {  //判断dirname是否存在
    process.exit(1)
}
else {
    fs.mkdirSync("./" + dirName)  //  mkdir $1
    process.chdir("./" + dirName) //  cd $1
    fs.mkdirSync('css')           //  mkdir css 
    fs.mkdirSync('js')            //  mkdir js
    fs.writeFileSync("./index.html", "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>")   //  echo -e "<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>">index.html
    fs.writeFileSync("css/style.css", "h1{color: red;}")  //  echo "h1{color: red;}">css/style.css
    fs.writeFileSync("./js/main.js", "var string = \"Hello World\"\nalert(string)")   //  echo -e " var string = \"Hello World\"\nalert(string)">js/main.js
    process.exit(0)   //  exit fi
}

