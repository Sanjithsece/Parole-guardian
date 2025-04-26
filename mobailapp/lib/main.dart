import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(ParoleeApp());

class ParoleeApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: Text('Parolee Tracker')),
        body: Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            children: [
              ElevatedButton(
                child: Text('Send Location Update'),
                onPressed: () => _sendLocation(37.7749, -122.4194),
              ),
              SizedBox(height: 20),
              Expanded(
                child: ListView.builder(
                  itemCount: _mockCalls.length,
                  itemBuilder: (ctx, i) => ListTile(
                    title: Text(_mockCalls[i]['number']),
                    subtitle: Text('Duration: ${_mockCalls[i]['duration']}'),
                    trailing: Text(_mockCalls[i]['time']),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _sendLocation(double lat, double lng) async {
    final response = await http.post(
      Uri.parse('http://localhost:3001/api/location'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'paroleeId': '123',
        'lat': lat,
        'lng': lng,
      }),
    );
    if (response.statusCode == 200) {
      print('Location updated!');
    }
  }

  final _mockCalls = [
    {'time': '10:00 AM', 'number': '+1-555-1234', 'duration': '2 mins'},
    {'time': '11:30 AM', 'number': '+1-555-5678', 'duration': '5 mins'},
  ];
}