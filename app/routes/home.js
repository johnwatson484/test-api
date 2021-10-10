module.exports = [{
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return h.response('Hello World!')
  }
}, {
  method: 'GET',
  path: '/person',
  handler: (request, h) => {
    return h.response({
      name: 'John Watson'
    })
  }
}]
