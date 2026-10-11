self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/poodlin-demo(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next\\/static|_next\\/image|favicon.ico|images\\/|.*\\.(?:svg|png|jpe?g|gif|webp|avif|ico|css|js|map|txt|xml)$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:svg|png|jpe?g|gif|webp|avif|ico|css|js|map|txt|xml)$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()