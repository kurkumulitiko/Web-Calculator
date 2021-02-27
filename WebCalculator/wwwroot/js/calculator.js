$(function () {
    $('.equal').click(function () {
        $.ajax({
            url: '/Home/Calculate',
            type: 'POST',
            data: { expression: $('#display').val(), isequaloperation: true },
            success: function (result) {
                $('#display').val(result)
            },
            error: function () {
                alert("error");
            }
        });
        return false;
    });
});
$(function () {
    $('.clear').click(function () {
        $('#display').val(0)
    });
});
$(function () {
    $('.dot').click(function () {
        var val = $('#display').val();
        if (val.endsWith("..")) {
            val = val.slice(0, -1)
            $('#display').val(val)
        }
    });
});
$(function () {
    $('.clearlast').click(function () {
        var value = $('#display').val()
        $('#display').val(value.substr(0, value.length - 1))
        if (value.length == 1 || value == "") {
            $('#display').val(0)
        }
    });
});
$(function () {
    $('.oper').click(function () {
        $.ajax({
            url: '/Home/Calculate',
            type: 'POST',
            data: { expression: $('#display').val(), isOperationPerformed: true },
            success: function (result) {
                $('#display').val(result)
            },
            error: function () {
                alert("error");
            }
        });
        return false;
    });
});
$("#display").keypress(function (value) {
    return /^\d*$/.test(value);
});
$(function () {
    $('.negative').click(function () {
        var res = $('#display').val();
        if (res.startsWith('-') && res != "") {
            var value = res.substring(1);
            $('#display').val(value);

        } else {
            let isnum = /^\d+$/.test(res);
            if (isnum) {
                $('#display').val("-" + $('#display').val())
            }
        }
    });
});
$(function () {
    $('.zero').click(function () {
        var subject = /^0+$/;
        var value = $('#display').val()
        if (value.match(subject)) {
            $('#display').val(0);
        }
    });
});
$(function () {
    $('.squared').click(function () {
        var value = $('#display').val()
        value = Math.pow(value, 2);
        $('#display').val(value)
    });
});
$(function () {
    $('#one').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#one').val());
        } else {
            value += $('#one').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#two').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#two').val());
        } else {
            value += $('#two').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#three').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#three').val());
        } else {
            value += $('#three').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#four').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#four').val());
        } else {
            value += $('#four').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#five').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#five').val());
        } else {
            value += $('#five').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#six').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#six').val());
        } else {
            value += $('#six').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#seven').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#seven').val());
        } else {
            value += $('#seven').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#eight').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#eight').val());
        } else {
            value += $('#eight').val();
            $('#display').val(value)
        }
    });
});
$(function () {
    $('#nine').click(function () {
        var value = $('#display').val()
        if (value == "0" || value == "" || value == "-0") {
            $('#display').val($('#nine').val());
        } else {
            value += $('#nine').val();
            $('#display').val(value)
        }
    });
});