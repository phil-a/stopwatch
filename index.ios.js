var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} = React;

var StopWatch = React.createClass({
  getInitialState: function() {
    return {
      timeElapsed: null
    }
  },
  render: function() {
    return (
      <View style={styles.container}>

        <View style={[styles.header, this.border('yellow')]}>
          <View style={[styles.timerWrapper, this.border('red')]}>
            <Text style={styles.timer}>
              {formatTime(this.state.timeElapsed)}
            </Text>
          </View>
          <View style={[styles.buttonWrapper, this.border('green')]}>
            {this.startStopButton()}
            {this.lapButton()}
          </View>
        </View>

        <View style={[styles.footer, this.border('blue')]}>
          <Text>List of laps</Text>
        </View>

      </View>
    );
  },
  startStopButton: function() {
    return (
      <TouchableHighlight
      onPress={this.handleStartPress}
      underlayColor="lightgreen"
      style={[styles.button, styles.startButton]}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    );
  },
  lapButton: function() {
    return (
      <TouchableHighlight
      onPress={this.handleLapPress}
      underlayColor="lightblue"
      style={[styles.button, styles.lapButton]}>
        <Text>
          Lap
        </Text>
      </TouchableHighlight>
    );
  },
  handleStartPress: function() {
    var startTime = new Date();
    setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);
  },
  handleLapPress: function() {
    console.log("Lap button pressed");
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 10
    }
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'honeydew'
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  lapButton: {
    borderColor: '#0000CC'
  },
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
