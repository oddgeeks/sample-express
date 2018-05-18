var cron = require('cron');

var job1 = new cron.CronJob({
  cronTime: '*/2 * * * *',
  onTick: function() {
    now = new Date();
    console.log(now + ': job 1 ticked');
  },
  start: true,
  timeZone: 'Europe/Paris'
});

var job2 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    now = new Date();
    console.log(now + ': job 2 ticked');
  },
  start: true,
  timeZone: 'Europe/Paris'
});

console.log('Started 2 cron jobs')
