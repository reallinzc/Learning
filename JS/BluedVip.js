var obj = JSON.parse($response.body);
obj.data[0].is_show_vip_page = 1;
obj.data[0].user_new_visitor_mode = 100;
obj.data[0].is_filter_ads = 1;
obj.data[0].is_global_view_secretly = 1;
obj.data[0].is_hide_city_settled = 1;
obj.data[0].vip_grade= 2;
obj.data[0].hide_vip_price = 1;
obj.data[0].is_vip_annual = 1;
obj.data[0].is_traceless = 1;
obj.data[0].black_allowed_count = 100;
obj.data[0].is_hide_distance = 1;
obj.data[0].is_hide_last_operate = 1;
obj.data[0].vip_split = {
    "is_hide_last_operate": 1,
    "is_hide_distance": 1,
    "is_invisible_half": 1,
    "is_invisible_all": 1,
    "is_show_vip_page": 1,
    "is_hide_vip_look": 1,
    "is_view_secretly": 1,
    "is_improve_backlist": 1,
    "is_top_feed_views": 1,
    "is_vip_more_avatar": 1,
    "is_traceless_access": 1,
    "is_advanced_recently_view": 1,
    "is_global_view_secretly": 1,
    "is_change_blued_icon": 1,
    "is_filter_vip": 1,
    "is_vip_red_name": 1,
    "is_vip_mark": 1,
    "is_vip_annual_mark": 1,
    "is_svip_mark": 1,
    "is_svip_annual_mark": 1,
    "is_secretly_followed": 1,
    "is_find_on_map": 1,
    "is_chat_backgrounds": 1,
    "is_filter_ads": 1,
    "is_vip_select": 1
}
$done({body: JSON.stringify(obj)});