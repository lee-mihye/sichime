//// 안먹은걸로JS - main.js /////

///// 로드구역 //////////////////////////////
window.addEventListener("DOMContentLoaded",
    function () {
        console.log("로딩완료!자바스크립트");


        //////////주소복사 스크립트 상단//////////////
        function copyToClipboard(val) {
            var t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = val;
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
        }

        $('#url_copy').click(function () {
            copyToClipboard('https://sichime.com/');

            toastr.options = {
                "preventDuplicates": true,
                "closeButton": false,
                "timeOut": 2000,
                "positionClass": "toast-top-center"
            }
            toastr.success("주소가 복사되었습니다");
        }); //////////주소복사 스크립트 상단//////////////



        //////////주소복사 스크립트 하단//////////////
        function copyToClipboard(val) {
            var t = document.createElement("textarea");
            document.body.appendChild(t);
            t.value = val;
            t.select();
            document.execCommand('copy');
            document.body.removeChild(t);
        }

        $('#url_copy_2').click(function () {
            copyToClipboard('https://sichime.com/');

            toastr.options = {
                "preventDuplicates": true,
                "closeButton": false,
                "timeOut": 2000,
                "positionClass": "toast-top-center"
            }
            toastr.success("주소가 복사되었습니다");
        }); //////////주소복사 스크립트 하단//////////////




        /////////////TOP버튼(스크롤 위로 올리면 나타나기)///////////
        var lastScrollTop = 0,
            delta = 15;

        $(window).scroll(function () {
            var scrollTop = $(this).scrollTop()
            /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
            // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
            if (Math.abs(lastScrollTop - scrollTop) <= delta) // 스크롤 값을 받아서 ~
                return; // ~ 리턴

            if ((scrollTop > lastScrollTop) && (lastScrollTop > 0)) {
                /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
                $(".tbtn").css("top", "0px");
            } else {

                $(".tbtn").css("top", "-100px");
            }
            lastScrollTop = scrollTop;
        }); /////////////TOP버튼(스크롤 위로 올리면 나타나기)///////////



    }); /////////////// 로드구역 ///////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////