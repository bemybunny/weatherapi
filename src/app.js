const express=require('express');
const app=express();
const path=require('path');
 const hbs=require('hbs');
 const viewsPath = path.join(__dirname, '../templates/views');
 app.set('views', viewsPath);
 app.set('view engine','hbs');
 const staticPath=path.join(__dirname,'../public');
 const partials_path=path.join(__dirname,'../templates/partials')
 app.use(express.static(staticPath));
 hbs.registerPartials(partials_path);
 //routing


 app.get('',(req,res)=>{
    res.render('index');
 })
 app.get('/about',(req,res)=>{
    res.render('about');
 })
 app.get('/weather',(req,res)=>{
    res.render('weather');
 })
 app.get('*',(req,res)=>{
    res.render('404error',{
    errorMsg:'Opps! Page Not Found'}
   );
 })
app.listen(3000,()=>{
    console.log(`listening on 3000`)
}) 