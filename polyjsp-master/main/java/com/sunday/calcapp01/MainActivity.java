package com.sunday.calcapp01;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        final EditText editText01  = (EditText) findViewById(R.id.editText01);
        final EditText editText02  = (EditText) findViewById(R.id.editText02);

        Button btnPlus     = (Button) findViewById(R.id.btnPlus);
        Button btnMinus    = (Button) findViewById(R.id.btnMinus);
        Button btnMultiple = (Button) findViewById(R.id.btnMultiple);
        Button btnDivide   = (Button) findViewById(R.id.btnDivide);

        final TextView txtResult   = (TextView) findViewById(R.id.txtResult);

        btnPlus.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                String snum1 = editText01.getText().toString();
                String snum2 = editText02.getText().toString();

                int num1 = Integer.parseInt(snum1);
                int num2 = Integer.parseInt(snum2);

                int nresult = num1 + num2;

                txtResult.setText(String.valueOf(nresult));
            }
        });

        btnMinus.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                String snum1 = editText01.getText().toString();
                String snum2 = editText02.getText().toString();

                int num1 = Integer.parseInt(snum1);
                int num2 = Integer.parseInt(snum2);

                int nresult = num1 - num2;

                txtResult.setText(String.valueOf(nresult));
            }
        });

        btnMultiple.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                String snum1 = editText01.getText().toString();
                String snum2 = editText02.getText().toString();

                int num1 = Integer.parseInt(snum1);
                int num2 = Integer.parseInt(snum2);

                int nresult = num1 * num2;

                txtResult.setText(String.valueOf(nresult));
            }
        });

        btnDivide.setOnClickListener(new Button.OnClickListener() {
            @Override
            public void onClick(View view) {
                String snum1 = editText01.getText().toString();
                String snum2 = editText02.getText().toString();

                int num1 = Integer.parseInt(snum1);
                int num2 = Integer.parseInt(snum2);

                int nresult = num1 / num2;

                txtResult.setText(String.valueOf(nresult));
            }
        });
    }

    public void onClickNext(View view){
        Intent intent1 = new Intent(MainActivity.this, CalcActivity2.class);
        startActivity(intent1);
    }
}
