const controller = {}
const mysqlConnection = require('../database') 

controller.list = (req, res)=>{
    mysqlConnection.query('SELECT * FROM autos', (err, auto)=>{
        if(err){
            res.json(err)
        }
        res.render('autos', {
            data: auto
        })
    })
}

controller.save = (req, res)=>{
    const datos = req.body
    
    mysqlConnection.query('INSERT INTO autos set ?', [datos], (err, data)=>{
        res.redirect('/')
    })
}

controller.edit = (req, res)=>{
    const id = req.params.id

     mysqlConnection.query('SELECT * FROM autos WHERE id = ?', [id], (err, auto)=>{
        res.render('auto_edit',{
             data: auto[0]
         })
     })
}

controller.new = (req, res)=>{
    const id = req.params.id
    const newdata = req.body
    
    mysqlConnection.query('UPDATE autos SET ? WHERE id = ?', [newdata, id], (err, newdata)=>{
        res.redirect('/')
    })

}

controller.delete = (req, res)=>{
    const id = req.params.id

    mysqlConnection.query('DELETE FROM autos WHERE id = ?', [id], (err, data)=>{
        res.redirect('/')
    })
}

module.exports = controller