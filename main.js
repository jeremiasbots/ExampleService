console.time()
const results = await fetch("http://localhost:3000/index", {
	method: "POST",
	body: JSON.stringify({ name: "devep" })
})
const text = await results.text()
console.log(text)
console.timeEnd()