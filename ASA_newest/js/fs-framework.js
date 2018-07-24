/*
 * Newest vesrion of Fine Select franework as of 07/24/2018
*/
let f = {
  head: document.head,
  body: document.body,
  app: document.getElementById("app"),

  title: function title(el) {
    return document.title = el
  },

  link: function link(file, rel, l,  src) {
    l: document.createElement("link");
    rel: l.setAttribute("rel", "stylesheet");
    src: l.setAttribute("src", file);
    document.head.appendChild(l);
  // link("css/yourfile.css")
  },

  script: function link(file, type, l,  src) {
    l: document.createElement("script");
    type: l.setAttribute("type", "text/javascript");
    src: l.setAttribute("src", file);
    document.body.appendChild(l);
  },
  
  create: function create(el) {
    return document.createElement(el);
  },

  getId: function getId(el) {
    return document.getElementById(el);
  },
  getDivs: function getDivs(el) {
    return document.querySelectorAll(el);
  },
  getClass: function getClass(el) {
    return document.getElementByClassName(el);
  },
  qSel: function qSel(el) {
    return document.querySelector(el);
  },
  qSelAll: function qSelAll(el) {
    return document.querySelectorAll(el);
  },
  addClass: function addClass(el, cls) {
    return el.classList.add(cls);
  },
  removeClass: function removeClass(el, rem) {
    return el.classList.remove(rem);
  },
  addId: function addId(el, id) {
    return el.id = id;
  },
  append: function append(el, chd) {
    return el.appendChild(chd);
  },
  htmTxt: function htmTxt(el, txt) {
    return el.innerHTML = txt;
  },
  setAttributes : function (el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }, 
  a_: document.createElement("a"), 
  abbr_: document.createElement("abbr"), 
  address_: document.createElement("address"), 
  area_: document.createElement("area"), 
  article_: document.createElement("article"), aside_: document.createElement("aside"), 
  audio_: document.createElement("audio"), 
  b_: document.createElement("b"), 
  base_: document.createElement("base"), 
  bdi_: document.createElement("bdi"), 
  bdo_: document.createElement("bdo"), 
  blockquote_: document.createElement("blockquote"), body_: document.createElement("body"), 
  br_: document.createElement("br"), 
  button_: document.createElement("button"), 
  canvas_: document.createElement("canvas"), 
  caption_: document.createElement("caption"), 
  cite_: document.createElement("cite"), 
  code_: document.createElement("code"), 
  col_: document.createElement("col"), 
  colgroup_: document.createElement("colgroup"), 
  data_: document.createElement("data"), 
  datalist_: document.createElement("datalist"), 
  dd_: document.createElement("dd"), 
  del_: document.createElement("del"), 
  details_: document.createElement("details"), 
  dfn_: document.createElement("dfn"), 
  div_: document.createElement("div"), 
  dl_: document.createElement("dl"), 
  dt_: document.createElement("dt"), 
  em_: document.createElement("em"), 
  embed_: document.createElement("embed"), 
  fieldset_: document.createElement("fieldset"), 
  figcaption_: document.createElement("figcaption"), 
  figure_: document.createElement("figure"), 
  footer_: document.createElement("footer"), 
  form_: document.createElement("form"), 
  h1_: document.createElement("h1"), 
  h2_: document.createElement("h2"), 
  h3_: document.createElement("h3"), 
  h4_: document.createElement("h4"), 
  h5_: document.createElement("h5"), 
  h6_: document.createElement("h6"), 
  head_: document.createElement("head"), 
  header_: document.createElement("header"), 
  hr_: document.createElement("hr"), 
  html_: document.createElement("html"), 
  i_: document.createElement("i"), 
  iframe_: document.createElement("iframe"), 
  img_: document.createElement("img"), 
  input_: document.createElement("input"), 
  ins_: document.createElement("ins"), 
  kbd_: document.createElement("kbd"), 
  label_: document.createElement("label"), 
  legend_: document.createElement("legend"), 
  li_: document.createElement("li"), 
  link_: document.createElement("link"), 
  main_: document.createElement("main"), 
  map_: document.createElement("map"), 
  mark_: document.createElement("mark"), 
  menu_: document.createElement("menu"), 
  menuitem_: document.createElement("menuitem"), 
  meta_: document.createElement("meta"), 
  meter_: document.createElement("meter"), 
  nav_: document.createElement("nav"), 
  noframes_: document.createElement("noframes"), 
  noscript_: document.createElement("noscript"), 
  object_: document.createElement("object"), 
  ol_: document.createElement("ol"), 
  optgroup_: document.createElement("optgroup"), 
  option_: document.createElement("option"), 
  output_: document.createElement("output"), 
  p_: document.createElement("p"), 
  param_: document.createElement("param"), 
  pre_: document.createElement("pre"), 
  progress_: document.createElement("progress"), 
  q_: document.createElement("q"), 
  rp_: document.createElement("rp"), 
  rt_: document.createElement("rt"), 
  rtc_: document.createElement("rtc"), 
  ruby_: document.createElement("ruby"), 
  s_: document.createElement("s"), 
  samp_: document.createElement("samp"), 
  script_: document.createElement("script"), 
  section_: document.createElement("section"), 
  select_: document.createElement("select"), 
  slot_: document.createElement("slot"), 
  small_: document.createElement("small"), 
  source_: document.createElement("source"), 
  span_: document.createElement("span"), 
  strong_: document.createElement("strong"), 
  style_: document.createElement("style"), 
  sub_: document.createElement("sub"), 
  summary_: document.createElement("summary"), 
  sup_: document.createElement("sup"), 
  table_: document.createElement("table"), 
  tbody_: document.createElement("tbody"), 
  td_: document.createElement("td"), 
  template_: document.createElement("template"), 
  textarea_: document.createElement("textarea"), 
  tfoot_: document.createElement("tfoot"), 
  th_: document.createElement("th"), 
  thead_: document.createElement("thead"), 
  time_: document.createElement("time"), 
  title_: document.createElement("title"), 
  tr_: document.createElement("tr"), 
  track_: document.createElement("track"), 
  u_: document.createElement("u"), 
  ul_: document.createElement("ul"), 
  var_: document.createElement("var"), 
  video_: document.createElement("video"), 
  wbr__: document.createElement("wbr")     
}


