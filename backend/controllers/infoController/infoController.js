const Info = require('../../models/info/info');

exports.createInfo = (req, res, next) => {
  let info = new Info(req.body);
  info.save()
  .then(i => {
    if(!i) {
      return res.status(500).json({
        message: 'Something went wrong'
      })
    }
    return res.status(200).json({
      info: i,
      message: 'Success'
    })
  }, err => {
    res.status(500).json({
      message: err
    })
  })

}

exports.updateInfo = (req, res, next) => {
  Info.findOne(req.body.id)
  .then(info => {
    if(!info) {
      return res.status(500).json({
        message: 'No Info with this id'
      })
    }
    let newInfo = {
      homePage: req.body.homePage || info.homePage,
      aboutPage: req.body.aboutPage || info.aboutPage
    }
    Info.updateOne({_id: req.body.id}, { $set: newInfo })
    .then((updatedInfo) => {
      if(!updatedInfo) {
        return res.status(500).json({
          message: 'Something went wrong'
        })
      }
      return res.status(200).json({
        message: 'Success',
        info: updatedInfo
      })
    })
  }, err => {
    res.status(500).json({
      message: err
    })
  })
}