

        //Generate Fumction
        const genPassword = () => {
        let $password = document.getElementById('password');
        let sixBtn = document.getElementById('button-six');
        let eightBtn = document.getElementById('button-eight');
        let twelveBtn = document.getElementById('button-twelve');
            // Generate Six password length
            const genSixPassword = () => {
                let $chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                let $passwordLength = 5;
                $password = '';

                for (let i = 0; i <= $passwordLength; i++) {
                    let $randomNumber = Math.floor(Math.random() * $chars.length);
                    $password += $chars.substring($randomNumber, $randomNumber + 1);
                }

                document.getElementById('password').value = $password;

            };

            sixBtn.addEventListener('click', () => {
                genSixPassword();
            });
          
                // Generate Eight password length
                 const genEightPassword = () => {
                      let $chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                let $passwordLength = 7;
                 $password = '';
                
                    for(let i = 0; i <= $passwordLength; i++){
             let $randomNumber = Math.floor(Math.random() * $chars.length);
            $password += $chars.substring($randomNumber, $randomNumber +1);
                    }
                document.getElementById('password').value = $password;

                  };
                  
                    eightBtn.addEventListener('click', () => {
                            genEightPassword();
                    });

                    // Generate Twelve password length
                           const genTwelvePassword = () => {
                let $chars = '0123456789abcdefghijklmnopqrstuvwxyz';
                let $passwordLength = 11;
                $password = '';

                for (let i = 0; i <= $passwordLength; i++) {
                    let $randomNumber = Math.floor(Math.random() * $chars.length);
                    $password += $chars.substring($randomNumber, $randomNumber + 1);
                }

                document.getElementById('password').value = $password;

            };

            twelveBtn.addEventListener('click', () => {
                genTwelvePassword();
            });

                };

                genPassword();
                  
                  
                  //Script for Copy function
const copyPassword = () => {
     let copyBtn = document.getElementById('button');
     let copyPass = () => {
          let $copyText = document.getElementById('password');
          $copyText.select();
          $copyText.setSelectionRange(0, 999);
          document.execCommand('copy');
     }
     copyBtn.addEventListener('click', () => {
          copyPass();
     });
};
copyPassword();

         
        