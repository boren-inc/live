	function loginTrigger(){
        $("#loginyh").click();
        $("#closeReg").click();
    }

    function regTrigger(){
        $("#regyh").click();
        $("#closeBtn").click();
    }
    function keydownEvent() {
        var e = window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 13 ) {
            search();
        }
    }
    function search()
    {
        var keyword = $("#topSearch").val();
        var tag = "#search";
        if (keyword == '') {
            tag = '';
        }
        window.location.href = '/bigShots?keyword=' + keyword + tag;
    }

//    $("#regyh").trigger("click");
	function check_phone() {
			  var phone = $.trim($('#dphone').val());
			  if (phone == '') {
				$('#derroe').text('�û��Ǳ�����');
				return false;
				 } else if (!/(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/.test(phone)) {
				$('#derroe').text('�ֻ���ʽ����ȷ!')
				return false;
			  };
			  $('#derroe').text('');
			  return true;
			}

			function check_password(){
				var password = $.trim($('#dpassword').val());
				if (password == '') {
					$('#derroe').text('���벻��Ϊ��');
					return false;
				 } else if (password.length<6) {
					$('#derroe').text('����С��6λ!')
					return false;
			  }
			  $('#derroe').text('');
			  return true;

			}
		
			
			$("#dphone").change(function(){
				check_phone();
			});
			$("#dpassword").change(function(){
				check_password();
			});
			$("#dpost").click(function(){
				if(check_password() == true && check_phone() == true ){
					 $.post('/api/login/',$("#custom_option").serialize(),function(result){
						if(result==1){
							location.reload();
						}else{
							$('#derroe').text('�˺Ż��������!')
						}		
					  });
				}
			});
	
		



	 function get_mobile_code() {
        $.post('/account/verifycode', {mobile: jQuery.trim($('#rphone').val()), send_code:276857}, function (data) {
            if(data.message == '�ύ�ɹ�'){
                RemainTime();
                $("#verify_mobile").text();
            }else{
                $("#verify_mobile").html('<span class="error">'+data.message+'</span>');
            }
        },'json');
    }
    ;
    var iTime = 59;
    var Account;
    function RemainTime() {
        document.getElementById('zphone').disabled = true;
        var iSecond, sSecond = "", sTime = "";
        if (iTime >= 0) {
            iSecond = parseInt(iTime % 60);
            iMinute = parseInt(iTime / 60)
            if (iSecond >= 0) {
                if (iMinute > 0) {
                    sSecond = iMinute + "��" + iSecond + "��";
                } else {
                    sSecond = iSecond + "��";
                }
            }
            sTime = sSecond;
            if (iTime == 0) {
                clearTimeout(Account);
                sTime = '��ȡ�ֻ���֤��';
                iTime = 59;
                document.getElementById('zphone').disabled = false;
            } else {
                Account = setTimeout("RemainTime()", 1000);
                iTime = iTime - 1;
            }
        } else {
            sTime = 'û�е���ʱ';
        }
        document.getElementById('zphone').value = sTime;
    }

		function check_phones() {
			
			  var phone = $.trim($('#rphone').val());
			  if (phone == '') {
				$('#rerror').text('�û��Ǳ�����');
				return false;
				 } else if (!/(?:13\d|15\d|17\d|18\d)\d{5}(\d{3}|\*{3})$/.test(phone)) {
				$('#rerror').text('�ֻ���ʽ����ȷ!')
				return false;
			  };
			  $('#rerror').text('');
			  return true;
			}
			function check_passwords(){
				var password = $.trim($('#rpassword').val());
				var rpassword_repeat = $.trim($('#rpassword_repeat').val());
				if (password == '') {
					$('#rerror').text('���벻��Ϊ��');
					return false;
				 } else if(password.length<6) {
					$('#rerror').text('���벻��С��6λ!')
					return false;
				  }else if(password != rpassword_repeat){
					 $('#rerror').text('���벻һ��!')
					 return false;

				  }
			  $('#rerror').text('');
			  return true;
			}
			function check_code(){
				var code = $.trim($('#mobile_code').val());
				if(code.length<2){
					 $('#rerror').text('��֤�����!')
					 return false;
				}
				 $('#rerror').text('');
				return true;

			}
			$("#rphone").change(function(){
				check_phones();
			});
			$("#rpassword").change(function(){
				check_passwords();
			});
			$("#rpassword_repeat").change(function(){
				check_passwords();
			});
			$("#mobile_code").change(function(){
				check_code();
			});

			$("#rpost").click(function(){
				
				if(check_phones()==true && check_passwords()==true && check_code()==true ){
					
					$.post('/api/register/',$("#rcustom_option").serialize(),function(result){
			
							if(result==1){
								location.reload();
							}else if(result==2){
								$('#derroe').text('���ֻ����Ѿ��Ǳ�վ��Ա');
							}else if(result==3){
								$('#derroe').text('��֤�����');	
								}
					  });
				}
			});

			//����