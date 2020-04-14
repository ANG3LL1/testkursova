<<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
  <meta name="viewport " content="width=device-width, initial-scale=1.0, maximum-scala=1.0, minimal-ui"/>
  <link rel="stylesheet" href="app.css">

  </head>
  <body>
  <div class="map" id="map">
    <div class="map__image">
      <svg height="299.9931666666667" version="1.1" width="460.6" xmlns="http://www.w3.org/2000/svg" style="overflow: hidden; position: relative; left: -0.200012px;" viewBox="0.452375 0.452375 460.6 299.9931666666667" preserveAspectRatio="xMinYMin"><rect x="-2015.01" y="-1312.05" width="5040" height="3282.6" r="0" rx="0" ry="0" fill="#ffffff" stroke="none" transform="matrix(0.4569,0,0,0.4569,0,0)" style="fill-opacity: 0;" stroke-width="2.188449848024316" fill-opacity="0"/>

var simplemaps_countrymap_mapdata={ ;
  main_settings: {  ;

    width: "300", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",

    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",

    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",

    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    BGR2231: {
      name: "Sliven"
    },
    BGR2232: {
      name: "Haskovo"
    },
    BGR2233: {
      name: "Stara Zagora"
    },
    BGR2234: {
      name: "Pazardzhik"
    },
    BGR2235: {
      name: "Plovdiv"
    },
    BGR2236: {
      name: "Smolyan"
    },
    BGR2237: {
      name: "Kardzhali"
    },
    BGR2243: {
      name: "Grad Sofiya"
    },
    BGR2244: {
      name: "Sofia"
    },
    BGR2245: {
      name: "Pernik"
    },
    BGR2246: {
      name: "Gabrovo"
    },
    BGR2247: {
      name: "Lovech"
    },
    BGR2248: {
      name: "Pleven"
    },
    BGR2249: {
      name: "Veliko Tarnovo"
    },
    BGR2250: {
      name: "Montana"
    },
    BGR2251: {
      name: "Vratsa"
    },
    BGR2252: {
      name: "Kyustendil"
    },
    BGR2253: {
      name: "Vidin"
    },
    BGR2254: {
      name: "Burgas"
    },
    BGR2255: {
      name: "Yambol"
    },
    BGR2256: {
      name: "Razgrad"
    },
    BGR2257: {
      name: "Targovishte"
    },
    BGR2258: {
      name: "Shumen"
    },
    BGR2259: {
      name: "Dobrich"
    },
    BGR2260: {
      name: "Varna"
    },
    BGR2261: {
      name: "Silistra"
    },
    BGR2262: {
      name: "Ruse"
    },
    BGR3002: {
      name: "Blagoevgrad"
    }
  },
  locations: {
    "0": {
      lat: 43.408,
      lng: 24.621,
      name: "Плевен",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "1": {
      lat: 42.697,
      lng: 23.324,
      name: "София",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "2": {
      lat: 43.835,
      lng: 25.958,
      name: "Русе",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "3": {
      lat: 43.528,
      lng: 26.525,
      name: "Разград",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "4": {
      lat: 41.934,
      lng: 25.554,
      name: "Хасково",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "5": {
      lat: 42.026,
      lng: 23.991,
      name: "Велинград"
    },
    "6": {
      lat: 43.206,
      lng: 27.925,
      name: "Варна",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "7": {
      lat: 42.492,
      lng: 27.472,
      name: "Бургас",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "8": {
      lat: 42.136,
      lng: 24.749,
      name: "Пловдив",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "9": {
      lat: 43.2,
      lng: 23.55,
      name: "Враца",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "10": {
      lat: 42.61,
      lng: 23.037,
      name: "Перник",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "11": {
      lat: 46.59,
      lng: -112.021,
      name: "Монтана",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "12": {
      lat: 43.146,
      lng: 24.713,
      name: "Ловеч",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "13": {
      lat: 42.285,
      lng: 22.689,
      name: "Кюстендил",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "15": {
      lat: 42.888,
      lng: 25.321,
      name: "Габрово",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "16": {
      lat: 43.576,
      lng: 27.83,
      name: "Добрич",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "17": {
      lat: 43.986,
      lng: 22.864,
      name: "Видин",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "18": {
      lat: 43.082,
      lng: 25.632,
      name: "Велико Търново",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "19": {
      lat: 41.576,
      lng: 24.708,
      name: "Смолян",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "20": {
      lat: 42.675,
      lng: 26.331,
      name: "Сливен",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "21": {
      lat: 42.021,
      lng: 23.095,
      name: "Благоевград",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "22": {
      lat: 43.264,
      lng: 26.942,
      name: "Шумен",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "23": {
      lat: 43.262,
      lng: 26.564,
      name: "Търговище",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "24": {
      lat: 41.576,
      lng: 24.708,
      name: "Смолян",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "25": {
      lat: 46.59,
      lng: -112.021,
      name: "Монтана",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    },
    "27": {
      lat: 44.116,
      lng: 27.265,
      name: "Силистра",
      url: "http://www.speshno.com/all?cid=0&rid=0&se=1&layout=blog&search=&se_regs=0&se_cats=&days_l="
    }
  },
  labels: {},
  regions: {}
};
</svg>
</div>
</body>

</html>
