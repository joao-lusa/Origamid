<?php

function api_usurio_get($request){

  $user = wp_get_current_user();

  return rest_ensure_response($user);
}

function registrar_api_usurio_get(){
  register_rest_route('api', '/usuario', array(
    array(
      'methods' => WP_REST_Server::READABLE,
      'callback' => 'api_usurio_get',
    ),
    ));
}

add_action('rest_api_init', 'registrar_api_usurio_get')

?>