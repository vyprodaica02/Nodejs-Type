module.exports = (router: any) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const homeControlller = require('../../../dist/app/Controller/HomeController')

  router.get('/', homeControlller.home)
}
