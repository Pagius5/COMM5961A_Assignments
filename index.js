// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide();
//     });
// });

// index 
$(function() {
    $('#index_hover1').hover(function() {
        $('#index_hover2, #index_hover3, #index_hover4, #index_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#index_hover2, #index_hover3, #index_hover4, #index_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#index_hover2').hover(function() {
        $('#index_hover1, #index_hover3, #index_hover4, #index_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#index_hover1, #index_hover3, #index_hover4, #index_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#index_hover3').hover(function() {
        $('#index_hover1, #index_hover2, #index_hover4, #index_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#index_hover1, #index_hover2, #index_hover4, #index_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#index_hover4').hover(function() {
        $('#index_hover1, #index_hover2, #index_hover3, #index_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#index_hover1, #index_hover2, #index_hover3, #index_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#index_hover5').hover(function() {
        $('#index_hover1, #index_hover2, #index_hover3, #index_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#index_hover1, #index_hover2, #index_hover3, #index_hover4').animate({'color': ''},400);
    });
});


// a1
$(function() {
    $('#a1_hover1').hover(function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover1').animate({'color': ''},400);
    });
});

$(function() {
    $('#a1_hover2').hover(function() {
        $('#a1_hover1, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover2').animate({'color': ''},400);
    }, function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover1').animate({'color': ''},400);
    });
});

$(function() {
    $('#a1_hover3').hover(function() {
        $('#a1_hover1, #a1_hover2, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover3').animate({'color': ''},400);
    }, function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover1').animate({'color': ''},400);
    });
});

$(function() {
    $('#a1_hover4').hover(function() {
        $('#a1_hover1, #a1_hover2, #a1_hover3, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover4').animate({'color': ''},400);
    }, function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover1').animate({'color': ''},400);
    });
});

$(function() {
    $('#a1_hover5').hover(function() {
        $('#a1_hover1, #a1_hover2, #a1_hover3, #a1_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover5').animate({'color': ''},400);
    }, function() {
        $('#a1_hover2, #a1_hover3, #a1_hover4, #a1_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a1_hover1').animate({'color': ''},400);
    });
});


// a2
$(function() {
    $('#a2_hover1').hover(function() {
        $('#a2_hover1').animate({'color': ''},400);
        $('#a2_hover2, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    });
});

$(function() {
    $('#a2_hover2').hover(function() {
        $('#a2_hover2').animate({'color': ''},400);
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    }, function() {
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    });
});

$(function() {
    $('#a2_hover3').hover(function() {
        $('#a2_hover3').animate({'color': ''},400);
        $('#a2_hover1, #a2_hover2, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover3').animate({'color': ''},400);
    }, function() {
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    });
});

$(function() {
    $('#a2_hover4').hover(function() {
        $('#a2_hover4').animate({'color': ''},400);
        $('#a2_hover1, #a2_hover2, #a2_hover3, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover4').animate({'color': ''},400);
    }, function() {
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    });
});

$(function() {
    $('#a2_hover5').hover(function() {
        $('#a2_hover5').animate({'color': ''},400);
        $('#a2_hover1, #a2_hover2, #a2_hover3, #a2_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover5').animate({'color': ''},400);
    }, function() {
        $('#a2_hover1, #a2_hover3, #a2_hover4, #a2_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a2_hover2').animate({'color': ''},400);
    });
});


// a3
$(function() {
    $('#a3_hover1').hover(function() {
        $('#a3_hover1').animate({'color': ''},400);
        $('#a3_hover2, #a3_hover3, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    });
});

$(function() {
    $('#a3_hover2').hover(function() {
        $('#a3_hover1, #a3_hover3, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover2').animate({'color': ''},400);
    }, function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    });
});

$(function() {
    $('#a3_hover3').hover(function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    }, function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    });
});

$(function() {
    $('#a3_hover4').hover(function() {
        $('#a3_hover1, #a3_hover2, #a3_hover3, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover4').animate({'color': ''},400);
    }, function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    });
});

$(function() {
    $('#a3_hover5').hover(function() {
        $('#a3_hover1, #a3_hover2, #a3_hover3, #a3_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover5').animate({'color': ''},400);
    }, function() {
        $('#a3_hover1, #a3_hover2, #a3_hover4, #a3_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a3_hover3').animate({'color': ''},400);
    });
});


// a4
$(function() {
    $('#a4_hover1').hover(function() {
        $('#a4_hover1').animate({'color': ''},400);
        $('#a4_hover2, #a4_hover3, #a4_hover4, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    });
});

$(function() {
    $('#a4_hover2').hover(function() {
        $('#a4_hover1, #a4_hover3, #a4_hover4, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover2').animate({'color': ''},400);
    }, function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    });
});

$(function() {
    $('#a4_hover3').hover(function() {
        $('#a4_hover1, #a4_hover2, #a4_hover4, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover3').animate({'color': ''},400);
    }, function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    });
});

$(function() {
    $('#a4_hover4').hover(function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    }, function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    });
});

$(function() {
    $('#a4_hover5').hover(function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover5').animate({'color': ''},400);
    }, function() {
        $('#a4_hover1, #a4_hover2, #a4_hover3, #a4_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a4_hover4').animate({'color': ''},400);
    });
});


// a5
$(function() {
    $('#a5_hover1').hover(function() {
        $('#a5_hover1').animate({'color': ''},400);
        $('#a5_hover2, #a5_hover3, #a5_hover4, #a5_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
    }, function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#a5_hover2').hover(function() {
        $('#a5_hover1, #a5_hover3, #a5_hover4, #a5_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover2').animate({'color': ''},400);
    }, function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#a5_hover3').hover(function() {
        $('#a5_hover1, #a5_hover2, #a5_hover4, #a5_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover3').animate({'color': ''},400);
    }, function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#a5_hover4').hover(function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover5').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover4').animate({'color': ''},400);
    }, function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    });
});

$(function() {
    $('#a5_hover5').hover(function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    }, function() {
        $('#a5_hover1, #a5_hover2, #a5_hover3, #a5_hover4').animate({'color': 'rgb(175, 175, 175)'},400);
        $('#a5_hover5').animate({'color': ''},400);
    });
});
