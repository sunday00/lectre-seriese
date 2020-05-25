package com.sunday.project4_2;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.ImageView;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    CheckBox    checkReady;
    TextView    txtDesc2;
    RadioGroup  rGrp;
    RadioButton radio0;
    RadioButton radio1;
    RadioButton radio2;
    RadioButton radio3;
    Button      btnFinish;
    ImageView   imgSelect;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        checkReady  = (CheckBox) findViewById(R.id.checkReady);
        txtDesc2    = (TextView) findViewById(R.id.txtDesc2);
        rGrp        = (RadioGroup) findViewById(R.id.rGrp);
        radio0      = (RadioButton) findViewById(R.id.radio0);
        radio1      = (RadioButton) findViewById(R.id.radio1);
        radio2      = (RadioButton) findViewById(R.id.radio2);
        radio3      = (RadioButton) findViewById(R.id.radio3);
        btnFinish   = (Button) findViewById(R.id.btnFinish);
        imgSelect   = (ImageView) findViewById(R.id.imgSelect);

        checkReady.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton compoundButton, boolean b) {
                if(checkReady.isChecked()) {
                    txtDesc2.setVisibility(View.VISIBLE);
                    rGrp.setVisibility(View.VISIBLE);
                    btnFinish.setVisibility(View.VISIBLE);
                    imgSelect.setVisibility(View.VISIBLE);
                } else {
                    txtDesc2.setVisibility(View.INVISIBLE);
                    rGrp.setVisibility(View.INVISIBLE);
                    btnFinish.setVisibility(View.INVISIBLE);
                    imgSelect.setVisibility(View.INVISIBLE);
                }
            }
        });

        btnFinish.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                switch (rGrp.getCheckedRadioButtonId()){
                    case R.id.radio0:
                            imgSelect.setImageResource(R.drawable.logo0);
                        break;
                    case R.id.radio1:
                            imgSelect.setImageResource(R.drawable.logo1);
                        break;
                    case R.id.radio2:
                            imgSelect.setImageResource(R.drawable.logo2);
                        break;
                    case R.id.radio3:
                            imgSelect.setImageResource(R.drawable.logo3);
                        break;
                }
            }
        });

    }
}
