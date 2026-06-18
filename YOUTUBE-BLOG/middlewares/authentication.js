const { validateToken } = require('../services/authentication');

function checkForAuthenticationCookie(cookieName) {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];
        console.log("COOKIE TOKEN:", tokenCookieValue); // ✅ add this

        if (!tokenCookieValue) return next();

        try {
           const userPayload = validateToken(tokenCookieValue);
           console.log("USER FROM TOKEN:", userPayload.email); // ✅ add this
           req.user = userPayload;
        } catch (error) {}
        return next();
    };
}

module.exports = {
    checkForAuthenticationCookie,
}