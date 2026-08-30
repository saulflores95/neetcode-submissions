class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        console.log("evalRPN:", { tokens })
        const operands = new Set(["+", "-", "*", "/"]);
        const stack = [];
        let a, b;

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i]
            if(!operands.has(token)) {
                stack.push(parseInt(token))
            } else {
                switch(token) {
                    case "+":
                        const sum = stack.pop() + stack.pop();
                        stack.push(sum);
                        break;
                    case "*":
                        const mult = stack.pop() * stack.pop();
                        stack.push(mult)
                        break
                    case "-":
                        a = stack.pop()
                        b = stack.pop()
                        const sub = b - a;
                        stack.push(sub)
                        break
                    default:
                        a = stack.pop()
                        b = stack.pop()
                        const div = Math.trunc(b / a)
                        stack.push(div)
                        break
                }
            }
        }

        return stack[0]
    }
}
