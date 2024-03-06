(function chai() {
    console.log('chai');
})();
//chai

(
    (name) => {
        console.log(`DB connected ${name}`);
    }
)("SQL")
//DB connected SQL