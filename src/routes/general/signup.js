/* ---------------------------------------------------------------------------------------------- */
/*                                              ROUTE                                             */
/* ---------------------------------------------------------------------------------------------- */
module.exports = async (req, res) => {
    res.render('signup', { auth: false })                       // Renders signup page (auth forced off)
}